import React from "react";
import { getSession } from "next-auth/client";

import UserProfile from "../components/profile/user-profile";
import { IncomingMessage } from "http";

function ProfilePage({
  user,
  data,
}: models.UserProfileProps): React.JSX.Element {
  return <UserProfile user={user} data={data} />;
}

export async function getServerSideProps(context: {
  req: IncomingMessage;
}): Promise<models.ServerSideResponse> {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  } else {
    const response = await fetch(
      `http://localhost:3000/api/user/list-todos?${session.user?.name}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    const user = session.user.name;
    return {
      props: { user, data },
    };
  }
}

export default ProfilePage;
