import userControllers from '../controllers/user_controllers';
import projectControllers from '../controllers/project_controllers';
import boardControllers from '../controllers/board_controllers';
import developerControllers from '../controllers/developer_controllers';

export default function (app) {
  userControllers(app);
  projectControllers(app);
  boardControllers(app);
  developerControllers(app);
}
