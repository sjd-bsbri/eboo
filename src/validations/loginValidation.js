import * as Yup from "yup";

export const loginValidationSchema = Yup.object({

  phone: Yup.string()
  .required("  لطفاشماره موبایل را وارد نمایید.")
  .test(
    "isphone",
    " شماره موبایل وارد شده صحیح نمی باشد.",
    (value) =>
      // ایمیل معتبر
      /^09[0-9]{9}$/.test(value)
  ),

  // emailOrPhone: Yup.string()
  //   .required("فیلد الزامی است")
  //   .test(
  //     "is-email-or-phone",
  //     "ایمیل یا شماره موبایل نادرست است",
  //     (value) =>
  //       // ایمیل معتبر
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //         value
  //       ) | /^09[0-9]{9}$/.test(value)
  //   ),

  // email: Yup.string()
  //   .email("آدرس ایمیل وشماره معتبر نیست")
  //   .required("آدرس ایمیل وشماره الزامی می باشد"),
  //   fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  // subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
  // message: Yup.string().required("نوشتن پیام الزامی می باشد"),
  // recaptcha: Yup.string().required("کپتچا الزامی می باشد"),
});

export const loginValidationSchemaModal2 = Yup.object().shape({
 
  email: Yup.string()
    .required("  لطفاایمیل را وارد نمایید.")
    .test("isemail", "ایمیل وارد شده صحیح نمی باشد.", (value) =>
      // ایمیل معتبر
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ),

    password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
