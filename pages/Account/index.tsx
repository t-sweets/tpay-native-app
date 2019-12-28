import React from "react";
import { useEffect, useDispatch, useSelector } from "app/lib/hooks";

import AccountPane from "app/components/AccountPane";
import Wallpeper from "app/components/Wallpaper";
import { thunkActionCreators } from "app/middleware/thunkAction";
import { RootState } from "app/modules";
import { adjustImagePath } from "app/lib/utils";

function Account() {
  const { profile } = useSelector(
    (state: Pick<RootState, "profile">) => state.profile
  );

  return (
    <Wallpeper>
      <AccountPane
        name={profile?.displayName ?? profile?.username ?? ""}
        icon={adjustImagePath(profile?.icon?.image)}
      />
    </Wallpeper>
  );
}

export default Account;
