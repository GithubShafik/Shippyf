// sections
import { JwtLoginView } from "src/routes/auth/jwt"; 

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Jwt: Login',
};

export default function LoginPage() {
  return <JwtLoginView />;
}
