//I had to dissable it because it works, but it says that it could not be found. Probably is the problem in tsconfig.json :/
// eslint-disable-next-line import/named
import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

import config from '../config/index.tsx';
import { IFormInput } from '../model/components.tsx';
import { Iuser } from '../model/user.tsx';

export async function getUsers(
    callbackFunction: (data: Array<Iuser>) => void
): Promise<void> {
    try {
        const data = await fetch(config.api.usersDataURL, { method: 'GET' });
        const jsonData: Array<Iuser> = (await data.json()) as Array<Iuser>;
        callbackFunction(jsonData);
    } catch (error) {
        //TODO: Maybe some kind of log... but it's not allowed.
        callbackFunction([]);
    }
}

// export async function getUsers(): Promise<Array<Iuser>> {
//     try {
//         const data = await fetch(config.api.usersDataURL, { method: 'GET' });
//         const jsonData: Array<Iuser> = (await data.json()) as Array<Iuser>;
//         return jsonData;
//     } catch (error) {
//         //TODO: Maybe some kind of log... but it's not allowed. :) Just be quiet. No one gonna know.
//         return [];
//     }
// }

export const usePostPostMutation = () => {
    return useMutation<AxiosResponse<IFormInput>, Error, IFormInput>(
        (data: IFormInput) =>
            axios.post<IFormInput>(config.api.formPostsURL, data)
    );
};
