import {useContext} from 'react';
import {Form, type FormProps} from '@remix-run/react';

import {AppProxyProviderContext} from '../AppProxyProvider';

export interface AppProxyFormProps extends FormProps {
  action: string;
}

/**
 * Sets up a Remix `<Form>` component that works when rendered behind an app proxy.
 *
 * Supports any properties accepted by the `<Form>` component.
 *
 * @example
 * <caption>Render a form element in a proxied route.</caption>
 * <description>Use an `AppProxyForm` within an `AppProxy` to create a form.</description>
 * ```ts
 * import {authenticate} from '~/shopify.server';
 * import {AppProxyProvider, AppProxyForm} from '@shopify/shopify-app-remix/react';
 *
 * export async function loader({ request }) {
 *   await authenticate.public.appProxy(request);
 *
 *   return json({ appUrl: process.env.SHOPIFY_APP_URL });
 * }
 *
 * export default function App() {
 *   const { appUrl } = useLoaderData();
 *
 *   return (
 *     <AppProxyProvider appUrl={appUrl}>
 *       <AppProxyForm action="/submit">
 *         <input type="text" name="name" />
 *
 *         <input type="submit" name="Submit" />
 *       </AppProxyForm>
 *     </AppProxyProvider>
 *   );
 * }
 * ```
 */
export function AppProxyForm(props: AppProxyFormProps) {
  const context = useContext(AppProxyProviderContext);

  if (!context) {
    throw new Error(
      'AppProxyForm must be used within an AppProxyProvider component',
    );
  }

  const {children, action, ...otherProps} = props;

  return (
    <Form action={context.formatUrl(action, false)} {...otherProps}>
      {children}
    </Form>
  );
}
