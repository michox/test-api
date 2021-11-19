import ForgeUI, { render, AdminPage, Fragment, Text, useAction, Button } from "@forge/ui";
import api, { route } from "@forge/api";

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Button text="test" onClick={async () => {await myFunc();}}/>
    </Fragment>
  );
};

export const run = render(
  <AdminPage>
    <App />
  </AdminPage>
);

async function myFunc() {
  var bodyData = `{
    "name": "CREATED",
    "description": "Created Project Category"
  }`;
  console.log("requesting...")

  const response = await api
    .asApp()
    .requestJira(route`/rest/api/3/projectCategory`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

  console.log(`Response: ${response.status} ${response.statusText}`);
  console.log(response);
  return 0;
}
