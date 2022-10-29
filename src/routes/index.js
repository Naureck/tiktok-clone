//Import Layouts
import { HeaderOnly } from '~/layouts'
import routesConfig from '~/config/routes'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profiles from '~/pages/Profiles'
import Message from '~/pages/Message'
import LivePage from '~/pages/Live'

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.live, component: LivePage },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search },
    { path: routesConfig.profile, component: Profiles },
    { path: routesConfig.message, component: Message }
];

const privatesRoutes = [];

export { publicRoutes, privatesRoutes }