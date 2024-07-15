import expree from 'express';
import { getbook} from '../controllers/Bookcontroller.js'
const router = expree.Router();

router.get('/', getbook);

export default router;