import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // TODO: Add authentication logic here
    setError("");
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && (
          <div className="text-red-600 text-sm text-center mb-2">{error}</div>
        )}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          Login
        </Button>
        <div className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-600 hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
