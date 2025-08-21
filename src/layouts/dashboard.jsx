import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";

import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />

        {/* 🟡 Thêm phần UI điều khiển tại đây */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Dropdown */}
          <div>
            <h3 className="mb-2 font-medium text-gray-700">Dropdown list</h3>
            <Select label="Chọn một tùy chọn">
              <Option>Tùy chọn 1: Linh kiện điều hòa</Option>
              <Option>Tùy chọn 2: Bảo hành máy nén</Option>
              <Option>Tùy chọn 2: Lịch sử sửa chữa</Option>
            </Select>
          </div>

          {/* Radio buttons */}
          <div>
            <h3 className="mb-2 font-medium text-gray-700">Radio buttons</h3>
            <div className="flex flex-col gap-2">
              <Radio name="group" label="Radio 1" defaultChecked />
              <Radio name="group" label="Radio 2" />
              <Radio name="group" label="Radio 3" />
            </div>
          </div>

          {/* Checkboxes */}
          <div>
            <h3 className="mb-2 font-medium text-gray-700">Checkboxes</h3>
            <div className="flex flex-col gap-2">
              <Checkbox label="Checkbox A" />
              <Checkbox label="Checkbox B" />
              <Checkbox label="Checkbox C" />
            </div>
          </div>
        </div>
        {/* 🔚 Kết thúc phần UI điều khiển */}

        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>

        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} key={path} />
              ))
          )}
        </Routes>

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
