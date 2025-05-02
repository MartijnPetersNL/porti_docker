import "../App.css";
import { Formik } from "formik";
export default function SignInFormulier() {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       username: "",
  //       password: "",
  //     },
  //     onSubmit: (values) => {
  //       console.log("Form data", values);
  //     },
  //     validate: (values) => {
  //       let errors = {};
  //       if (!values.username) {
  //         errors.username = "Required input";
  //       }
  //       if (!values.email) {
  //         errors.email = "Required field";
  //       } else if (
  //         !/^[A-Z0-9,_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //       ) {
  //         errors.email = "Invalid email format";
  //       }
  //       if (!values.password) {
  //         errors.password = "Required input";
  //       }
  //       return errors;
  //     },
  //   });
  console.log("Form values", Formik.values);
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required input";
        }
        if (!values.email) {
          errors.email = "Required field";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email format";
        }
        if (!values.password) {
          errors.password = "Required input";
        }
        return errors;
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <h2>Sign in Formik test</h2>
          <div className="form-control">
            <input
              type="text"
              className="border-solid border-2 border-gray-600"
              placeholder="e-mail"
              name="email"
              {...formik.getFieldProps("email")}
            />
            <br />
            <br />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <input
              type="text"
              name="username"
              {...formik.getFieldProps("username")}
              placeholder="Username..."
              className="border-solid border-2 border-gray-600"
            />
            <br />
            <br />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              className="border-solid border-2 border-gray-600"
              {...formik.getFieldProps("password")}
            />
            <br />
            <br />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}
