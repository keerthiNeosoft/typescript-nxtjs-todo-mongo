import React from "react";
import { NextRouter, useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";

import AuthForm from "../components/auth/auth-form";

function AuthPage(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
