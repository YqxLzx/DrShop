import Vue from 'vue'
import {Backtop,Form,FormItem,Input,Checkbox,Breadcrumb,BreadcrumbItem,RadioGroup
,Radio,Button,Message,Notification,Badge,steps,step
,cascader,DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Backtop);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Checkbox);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(RadioGroup);
Vue.use(Radio)
Vue.use(Badge);
Vue.use(Button)
Vue.use(steps)
Vue.use(step)
Vue.use(cascader)
Vue.use(DatePicker)
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

