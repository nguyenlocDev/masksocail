import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, publicRoutes, settingsRoutes } from "./routes";
import HomePage from "./page/HomePage";
import Feed from "./page/Feed";
import NotFound from "./page/NotFound";
import FriendContents from "./components/friends/FriendContents";
const App: React.FC = () => {
  return (
    <div className="app w-screen h-screen overflow-hidden bg-red-200">
      <Routes>
        {publicRoutes.map((items) => (
          <Route
            key={items.path}
            path={items.path}
            element={<items.components />}
          />
        ))}
        <Route path="/" element={<HomePage />}>
          {PrivateRoutes.map((items) => (
            <Route
              key={items.path}
              path={items.path}
              element={<items.components />}
            >
              {items.path === "community" && (
                <>
                  <Route path="followers" element={<FriendContents />} />
                  <Route path="following" element={<FriendContents />} />
                  <Route path="suggestions" element={<FriendContents />} />
                </>
              )}
              {items.path === "setting" && (
                <>
                  {settingsRoutes.map((items) => (
                    <Route
                      key={items.path}
                      path={items.path}
                      element={<items.components />}
                    />
                  ))}
                </>
              )}
            </Route>
          ))}
          <Route index element={<Feed />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
