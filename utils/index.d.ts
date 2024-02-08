namespace models {
    interface Request {
        url: string;
        method: string;
        body: {
            todo?: string,
            username?: string,
            password?: string,
            oldPassword?: string,
            newPassword?: string
        };
        header?: string;
    }

    type ResponseJson = {
        message: string
    }

    interface Response {
        status: (code: number) => {
            json: { ({ message: string }) };
        };
    }

    interface TodoElement {
        _id: string;
        todo: string;
    }

    interface UserProfileProps {
        user: string;
        data: models.TodoElement[];
    }

    interface PasswordFormData {
        oldPassword: string;
        newPassword: string;
    }

    interface ServerSideResponse {
        redirect?: {
            destination: string,
            permanent: boolean,
        };
        props?: UserProfileProps
    }
}