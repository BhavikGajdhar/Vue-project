<template>
  <div class="form-validation">
    <form>
      <div class="field-wrapper">
        <label for="name">FirstName:</label>
        <Field name="firstName" type="text" />
        <div class="error">
          <ErrorMessage name="firstName" />
        </div>
      </div>
      <div class="field-wrapper">
        <label for="name">LastName:</label>
        <Field name="lastName" type="text" />
        <div class="error">
          <ErrorMessage name="lastName" />
        </div>
      </div>
      <div class="field-wrapper">
        <label for="name">UserName:</label>
        <Field name="username" type="text" />
        <div class="error">
          <ErrorMessage name="username" />
        </div>
      </div>
      <div class="field-wrapper">
        <label for="email">Email:</label>
        <Field type="text" name="email" />
        <div class="error">
          <ErrorMessage name="email" />
        </div>
      </div>
      <div class="field-wrapper">
        <label for="email">PhoneNumber:</label>
        <Field type="text" name="phone" />
        <div class="error">
          <ErrorMessage name="phone" />
        </div>
      </div>
      <div class="field-wrapper">
                 <label for="email">Select State:</label>
                <Field name="state" as="select">
                    <option value="gujarat">Gujarat</option>
                    <option value="kerala">Kerala</option>
                    <option value="maharashtra">Maharashtra</option>
                </Field>
                <div class="error">
                    <ErrorMessage name="state" />
                </div>
            </div>
            <div class="field-wrapper">
                <p>Select Gender:</p>
                <Field type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <Field type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
            </div>
            <div class="field-wrapper">
                <p>Select language:</p>
                <Field type="checkbox" name="language" id="gujarati" value="gujarati"/>
                <label for="gujarati">Gujarati</label>
                <Field type="checkbox" name="language" id="english" value="english" />
                <label for="english">English</label>
                <Field type="checkbox" name="language" id="hindi" value="hindi"/>
                <label for="hindi">Hindi</label>
            </div>
      <button
        class="submit-btn"
        @click="submitForm"
        type="button"
        :disabled="!meta.valid"
      >
        Submit Form
      </button>
    </form>
  </div>
</template>

<script>
import { defineComponent, watch } from "vue";
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: {
    Field,
    ErrorMessage,
  },
  emits:['postData'],
  props: ['formData'],
    setup(props, context) {
      const phoneRegExp = /([0-9]{10})/;
      const schema = yup.object({
        firstName: yup.string().required("FirstName is required"),
        lastName: yup.string().required("LastName is required"),
        phone: yup
          .string()
          .required("Phone Number is required")
          .matches(phoneRegExp, "Phone number is not valid")
          .max(10, "The Phone number should be maximum of 10 digits"),
        email: yup.string().required("Email is required"),
        state: yup.string().required("State is required"),
      });
      const initialValue = {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          phone: '',
          state:'',
          gender:'',
          language:[]
      }
      const { meta, values, handleSubmit,setValues } = useForm({
        validationSchema: schema,
        initialValues: initialValue,

      });

      /** user submit form */
      const submitForm = handleSubmit(() => {
        context.emit("postData", values);
      });

      watch(()=>props.formData,()=>{
        setValues(props.formData)
      })

      return {
        submitForm,
        meta,
        values,
      };
    },
  },
);
</script>

<style>
.form-validation {
  width: 600px;
  margin: auto;
  text-align: left;
  background: rgb(241, 226, 226);
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
}

.form-validation .field-wrapper {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
}
.form-validation .field-wrapper label {
  margin-right: 0.5rem;
}

.form-validation .field-wrapper label {
  font-size: 1.25rem;
}

.submit-btn {
  margin: 1rem 0.75rem;
  padding: 0.125rem 0.5rem;
  font-size: 1rem;
}

.error {
  color: red;
}
</style>
