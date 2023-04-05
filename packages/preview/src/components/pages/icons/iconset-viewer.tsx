import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import { getIcons } from "@utils/getIcons";
import React from "react";

import IconsPageLoading from "./loading";

export default function IconSetViewer({ icon }) {
  const IconSet = loadable.lib(() => getIcons(icon.id));
  // console.log(icon)
  return (
    <>
      <h2>Icons</h2>
      <IconSet fallback={<IconsPageLoading />}>
        {({ default: icons }) => (  
          <div className="icons">
            {Object.keys(icons).map((name) => (
              <Icon key={name} icon={icons[name]} id={icon.id} name={name} />
            ))}
          </div>
        )}
      </IconSet>
    </>
  );
}
