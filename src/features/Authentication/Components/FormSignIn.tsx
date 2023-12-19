import { Form, FormBlock, FormContainer } from "@components/Form";
import { DarkButton } from "@components/UI/Buttons";
import { Input } from "@components/UI/Inputs";
import { Text } from "@components/UI/Labels";
import { Preloader } from "@components/UI/Preloaders";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const FormSignIn = () => {
  const isLoading = false;
  const errors = {
    emailError: "",
    passwordError: "",
  };

  const handleContinueWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google`;
  };

  const handleConutinueWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/github`;
  };

  return (
    <FormContainer>
      <Form method="post">
        <FormBlock>
          <Text color="#808080">Email</Text>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
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
        <DarkButton type="submit" disabled={isLoading}>
          Sign In
        </DarkButton>
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
            <Link to="/signup" className="link-primary">
              Sign up
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

export default FormSignIn;
