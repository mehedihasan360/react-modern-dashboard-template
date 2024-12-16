import { Button, Layout } from "antd";
import React from "react";
import Iconify from "../../../config/IconifyConfig";

interface Props {
  xs?: boolean;
  collapsed: boolean;
  handleCollapsed: () => void;
  handleOpen: () => void;
}
const LayoutHeader: React.FC<Props> = ({
  xs,
  collapsed,
  handleCollapsed,
  handleOpen,
}) => {
  return (
    <Layout.Header style={{ padding: "0 1rem" }}>
      {xs ? (
        <Button
          onClick={handleOpen}
          icon={<Iconify icon="heroicons-outline:menu-alt-1" />}
          type="default"
        />
      ) : (
        <Button
          onClick={handleCollapsed}
          icon={
            <Iconify
              icon={
                collapsed
                  ? "line-md:menu-unfold-right"
                  : "line-md:menu-fold-left"
              }
            />
          }
          type="default"
        />
      )}
    </Layout.Header>
  );
};

export default LayoutHeader;
