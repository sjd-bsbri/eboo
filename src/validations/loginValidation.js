import * as yup from "yup";

export const loginValidationSchema = yup.object({
  // phone: Yup.string()
  //   .required("  لطفاشماره موبایل را وارد نمایید.")
  //   .test("isphone", " شماره موبایل وارد شده صحیح نمی باشد.", (value) =>
  //     /^09[0-9]{9}$/.test(value)
  //   ),

  phoneNumber: yup
    .string()
    .required('شماره موبایل را وارد کنید')
    .matches(/^\d{11}$/, 'شماره موبایل باید 11 رقمی باشد'),
});

// export const verificationCodeValidationSchema = Yup.string()
//   .required("کد تایید را وارد کنید")
//   .length(6, "کد تایید باید 6 رقمی باشد");
