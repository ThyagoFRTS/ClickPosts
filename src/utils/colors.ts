import { theme } from '../global/theme';

export const switchColor = (focus: boolean) => {
    return focus? theme.primary.light : theme.primary.dark
}