// @ts-nocheck
import { ApplyPluginsType } from '/Users/xiaohuoni/Desktop/dumi-test/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"title":"Button","path":"/button","meta":{},"children":[{"path":"/button","title":"按钮","meta":{}}]}]}},"locales":[],"navs":{},"title":"Library Name","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/button",
        "component": require('../../Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1592830139382,
          "title": "按钮",
          "slugs": [
            {
              "depth": 2,
              "value": "default",
              "heading": "default"
            },
            {
              "depth": 2,
              "value": "primary",
              "heading": "primary"
            },
            {
              "depth": 2,
              "value": "secondary",
              "heading": "secondary"
            },
            {
              "depth": 2,
              "value": "disabled",
              "heading": "disabled"
            }
          ],
          "group": {
            "path": "/button",
            "title": "Button"
          }
        },
        "title": "按钮"
      }
    ],
    "title": "Library Name"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
