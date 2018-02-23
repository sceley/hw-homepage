//package
const Router = require('express').Router;
const bodyparser = require('body-parser');
const multer = require('multer');

//middleware
const authLogin = require('./middleware/auth').authLogin;

//controller
const login = require('./controller/log').login;
const logup = require('./controller/log').logup;
const logout = require('./controller/log').logout;
const getCaptcha = require('./controller/getCaptcha');
const checkMobile = require('./controller/checkout').checkMobile;
const checkUsername = require('./controller/checkout').checkUsername;
const checkCaptcha = require('./controller/checkout').checkCaptcha;
const checkEmail = require('./controller/checkout').checkEmail;
const getUser = require('./controller/user').getUser;
const editUser = require('./controller/user').editUser;
const uploadAvatar = require('./controller/user').uploadAvatar;
const upload = require('./controller/upload').upload;
const createArticle = require('./controller/article').createArticle;
const getArticles = require('./controller/article').getArticles;
const getArticle = require('./controller/article').getArticle;
const articleComment = require('./controller/article').articleComment;
const applyMember = require('./controller/member').applyMember;
const createTopic = require('./controller/topic').createTopic;

let router = Router();

router.get('/logout', logout);
router.get('/user', authLogin, getUser);
router.get('/articles', getArticles);
router.get('/article/:id', getArticle);

router.use(bodyparser.json());

router.post('/login', login);
router.post('/logup', logup);
router.post('/getcaptcha', getCaptcha);
router.post('/checkusername', checkUsername);
router.post('/checkmobile', checkMobile);
router.post('/checkcaptcha', checkCaptcha);
router.post('/checkemail', checkEmail);
router.post('/user/edit', editUser);
router.post('/user/uploadavatar', multer().single('avatar'), authLogin, uploadAvatar);
router.post('/user/upload', multer().single('image'), authLogin, upload);
router.post('/article/create', createArticle);
router.post('/article/:id/comment', articleComment);
router.post('/member/apply', authLogin, applyMember);
router.post('/topic/create', authLogin, createTopic);


module.exports = router;