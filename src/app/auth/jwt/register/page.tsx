// sections
import { JwtRegisterView } from "src/routes/auth/jwt";

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Jwt: Register',
};

export default function RegisterPage() {
  return <JwtRegisterView />;
}
