import { AppShell } from 'components/layout'
import { AppShellProvider } from 'components/providers/AppShellProvider'
import { NextApplicationPage } from 'pages/_app'
import { store } from 'store/store'
import { Provider } from 'react-redux'

export function AppLayout(Component: NextApplicationPage, props: any) {
  return (
    <Provider store={store}>
      <AppShellProvider>
        <AppShell
          mobileSidebar={Component.mobileSidebar}
          desktopSidebar={Component.desktopSidebar}
        >
          <Component {...props} />
        </AppShell>
      </AppShellProvider>
    </Provider>
  )
}
