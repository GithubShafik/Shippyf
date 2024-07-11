// sections
import { Auth0LoginView } from "src/routes/auth/auth0";

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Auth0: Login',
};

export default function LoginPage() {
  return <Auth0LoginView />;
}
