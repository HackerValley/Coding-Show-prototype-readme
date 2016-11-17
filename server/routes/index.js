import userRoutes from './user_routes';
import projectRoutes from './project_routes';
import boardRoutes from './board_routes';
import developerRoutes from './developer_routes';

export default function (app) {
  userRoutes(app);
  projectRoutes(app);
  boardRoutes(app);
  developerRoutes(app);
}