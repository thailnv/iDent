import { Switch, Route, useRouteMatch } from "react-router-dom"
import { ServiceListPage } from "./child/ServiceListPage";
import { TeethCleaningPage } from "./child/TeethCleaningPage";
import { OrthodonticsPage } from "./child/OrthodonicsPage";
import { TeethWhiteningPage } from "./child/TeethWhiteningPage";
import { DentalAnesthesiaPage } from "./child/DentalAnesthesiaPage";
function ServicesPage(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <ServiceListPage />
      </Route>
      <Route path={`${path}/teeth-whitening`}>
        <TeethWhiteningPage />
      </Route>
      <Route path={`${path}/teeth-cleaning`}>
        <TeethCleaningPage />
      </Route>
      <Route path={`${path}/orthodontics`}>
        <OrthodonticsPage />
      </Route>
      <Route path={`${path}/dental-anesthesia`}>
        <DentalAnesthesiaPage />
      </Route>
    </Switch>
  )
}

export { ServicesPage }