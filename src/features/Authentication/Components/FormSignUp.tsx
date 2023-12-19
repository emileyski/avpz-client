import { Form, FormBlock, FormContainer } from "@components/Form";
import { DarkButton } from "@components/UI/Buttons";
import { Input } from "@components/UI/Inputs";
import { Text } from "@components/UI/Labels";
import { Preloader } from "@components/UI/Preloaders";
import { Button } from "@mui/material";
import { Link, useActionData } from "react-router-dom";

const FormSignUp = () => {
  const isLoading = false;
  const formErrors = useActionData();

  if (formErrors) alert(formErrors.error);

  const handleContinueWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google`;
  };

  const handleConutinueWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/github`;
  };
  const errors = {
    emailError: "",
    passwordError: "",
  };
  return (
    <FormContainer>
      <Form method="post">
        <FormBlock>
          <Text color="#808080">Email</Text>
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Text color="#808080">Fullname</Text>
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Text color="#808080">Nickname</Text>
          <Input
            type="text"
            placeholder="Enter your nickname"
            name="nickname"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Text color="#808080">Date of birth</Text>
          <Input
            type="date"
            placeholder="Enter your name"
            name="birthDate"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.emailError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Text color="#808080">Password</Text>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isLoading}
          />
          <Text color="#d62424" fontSize="14px">
            {errors?.passwordError}
          </Text>
        </FormBlock>
        <FormBlock>
          <Text color="#808080">Confirm password</Text>

          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            disabled={isLoading}
          />
        </FormBlock>
        <DarkButton disabled={isLoading}>Sign Up</DarkButton>
        {isLoading && <Preloader width={20} />}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div>
            <Text color="#808080">Already have an account? </Text>
            <Link to="/signin" className="link-primary">
              Sign in
            </Link>
          </div>
          <Link to="/" className="link-primary">
            Go to home
          </Link>
        </div>

        <Button
          onClick={handleContinueWithGoogle}
          variant="contained"
          color="primary"
        >
          Continue with Google
        </Button>
        <Button
          onClick={handleConutinueWithGithub}
          variant="contained"
          color="primary"
        >
          Continue with Github
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FormSignUp;
