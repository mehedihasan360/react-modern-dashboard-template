import { Checkbox, Flex, Form, type FormProps } from "antd";
import React from "react";
import { LoginTypes } from "../types/authTypes";
import Iconify from "../../../config/IconifyConfig";
import {
  emailValidator,
  passwordValidator,
} from "../../../utilities/validator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormSubmit from "../../../common/Antd/Form/FormSubmit";
import {
  FormItemInput,
  FormItemPassword,
} from "../../../common/Antd/Form/FormItems";
import FormItemUpload from "../../../common/Antd/Form/FormItemUpload";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const { state } = useLocation();
  const navigate = useNavigate();

  const from: string = state?.from?.pathname || "/";

  const onFinish: FormProps<LoginTypes>["onFinish"] = async (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ remember: true }}
      >
        <FormItemInput<LoginTypes>
          name="email"
          validator={emailValidator}
          componentProps={{
            type: "email",
            placeholder: "e.g: some@example.com",
            prefix: <Iconify icon="ant-design:user-outlined" />,
          }}
        />

        <FormItemPassword<LoginTypes>
          name="password"
          validator={passwordValidator}
          componentProps={{
            prefix: <Iconify icon="ant-design:lock-outlined" />,
            placeholder: "e.g: ********",
          }}
        />

        <Flex
          justify="space-between"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          <Form.Item<LoginTypes>
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/auth/send-otp">Forgot Password!</Link>
        </Flex>

        <FormItemUpload name={"avatar"} />

        <FormSubmit name="Login" block icon="ant-design:login-outlined" />
      </Form>
    </React.Fragment>
  );
};

export default Login;
