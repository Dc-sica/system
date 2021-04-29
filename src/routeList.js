/*
 * @Author: Jason_Ma
 * @Date: 2021-01-06 11:01:46
 * @LastEditors: Jason_Ma
 * @LastEditTime: 2021-01-06 17:24:09
 * @FilePath: /hos-logistics-management/src/routeList.js
 */
import Home from './views/Home.vue'
let routeList = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      text: '主页'
    },
    isShow: true,
    icon: '1',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'home',
        text: '主页',
        meta: {
          text: '主页',
          menuPath: '/home',
          menuBread: ['主页']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/index/homePage.vue')
      },
      {
        path: '/warehouseManagement',
        name: 'warehouseManagement',
        text: '库存管理',
        meta: {
          text: '库存管理',
          menuPath: '/warehouseManagement',
          menuBread: ['主页', '库存管理']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/warehouse/index.vue')
      },
      {
        path: '/materialStorage',
        name: 'materialStorage',
        text: '物资入库',
        meta: {
          text: '物资入库',
          menuPath: '/materialStorage',
          menuBread: ['主页', '物资入库']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/materialStorage/index.vue')
      },
      {
        path: '/materialDelivery',
        name: 'materialDelivery',
        text: '物资出库',
        meta: {
          text: '物资出库',
          menuPath: '/materialDelivery',
          menuBread: ['主页', '物资出库']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/materialDelivery/index.vue')
      },
      {
        path: '/materialRequisition',
        name: 'materialRequisition',
        text: '物资领用',
        meta: {
          text: '物资领用',
          menuPath: '/materialRequisition',
          menuBread: ['主页', '物资领用']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/materialRequisition/index.vue')
      },
      {
        path: '/materialWithdrawal',
        name: 'materialWithdrawal',
        text: '物资退库',
        meta: {
          text: '物资退库',
          menuPath: '/materialWithdrawal',
          menuBread: ['主页', '物资退库']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/materialWithdrawal/index.vue')
      },
      {
        path: '/inventoryQuery',
        name: 'inventoryQuery',
        text: '库存明细帐查询',
        meta: {
          text: '库存明细帐查询',
          menuPath: '/inventoryQuery',
          menuBread: ['主页', '库存明细帐查询']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/inventory/inventoryQuery/index.vue')
      },
      // 采购
      {
        path: '/purchaseRequisition',
        name: 'purchaseRequisition',
        text: '采购申请',
        meta: {
          text: '采购申请',
          menuPath: '/purchaseRequisition',
          menuBread: ['主页', '采购申请']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/purchaseRequisition/index.vue')
      },
      {
        path: '/purchaseApproval',
        name: 'purchaseApproval',
        text: '采购审批',
        meta: {
          text: '采购审批',
          menuPath: '/purchaseApproval',
          menuBread: ['主页', '采购审批']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/purchaseApproval/index.vue')
      },
      {
        path: '/purchaseReceipt',
        name: 'purchaseReceipt',
        text: '采购收货',
        meta: {
          text: '采购收货',
          menuPath: '/purchaseReceipt',
          menuBread: ['主页', '采购收货']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/purchaseReceipt/index.vue')
      },
      {
        path: '/purchaseReturns',
        name: 'purchaseReturns',
        text: '采购退货',
        meta: {
          text: '采购退货',
          menuPath: '/purchaseReturns',
          menuBread: ['主页', '采购退货']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/purchaseReturns/index.vue')
      },
      {
        path: '/returnApproval',
        name: 'returnApproval',
        text: '退货审批',
        meta: {
          text: '退货审批',
          menuPath: '/returnApproval',
          menuBread: ['主页', '退货审批']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/returnApproval/index.vue')
      },
      {
        path: '/purchaseInvoice',
        name: 'purchaseInvoice',
        text: '采购发票维护',
        meta: {
          text: '采购发票维护',
          menuPath: '/purchaseInvoice',
          menuBread: ['主页', '采购发票维护']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/procurement/purchaseInvoice/index.vue')
      },

      {
        path: '/customerFeedback',
        name: 'customerFeedback',
        text: '用户反馈',
        meta: {
          text: '用户反馈',
          menuPath: '/customerFeedback',
          menuBread: ['主页', '用户反馈']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/feedback/customerFeedback/index.vue')
      },
      {
        path: '/messageReply',
        name: 'messageReply',
        text: '消息回复',
        meta: {
          text: '消息回复',
          menuPath: '/messageReply',
          menuBread: ['主页', '消息回复']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/feedback/messageReply/index.vue')
      },

      {
        path: '/departmentSetting',
        name: 'departmentSetting',
        text: '部门设置',
        meta: {
          text: '部门设置',
          menuPath: '/departmentSetting',
          menuBread: ['主页', '部门设置']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/departmentSetting/index.vue')
      },
      {
        path: '/userManagement',
        name: 'userManagement',
        text: '用户管理',
        meta: {
          text: '用户管理',
          menuPath: '/userManagement',
          menuBread: ['主页', '用户管理']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/userManagement/index.vue')
      },
      {
        path: '/roleManagement',
        name: 'roleManagement',
        text: '角色管理',
        meta: {
          text: '角色管理',
          menuPath: '/roleManagement',
          menuBread: ['主页', '角色管理']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/roleManagement/index.vue')
      },
      {
        path: '/dictManagement',
        name: 'dictManagement',
        text: '字典管理',
        meta: {
          text: '字典管理',
          menuPath: '/dictManagement',
          menuBread: ['主页', '字典管理']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/dictManagement/index.vue')
      },
      {
        path: '/approvalProcessSettings',
        name: 'approvalProcessSettings',
        text: '审批流程设置',
        meta: {
          text: '审批流程设置',
          menuPath: '/approvalProcessSettings',
          menuBread: ['主页', '审批流程设置']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/approvalProcessSettings/index.vue')
      },
      {
        path: '/materialClassification',
        name: 'materialClassification',
        text: '物料分类',
        meta: {
          text: '物料分类',
          menuPath: '/materialClassification',
          menuBread: ['主页', '物料分类']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/materialClassification/index.vue')
      },
      {
        path: '/materialInformation',
        name: 'materialInformation',
        text: '物料信息',
        meta: {
          text: '物料信息',
          menuPath: '/materialInformation',
          menuBread: ['主页', '物料信息']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/materialInformation/index.vue')
      },
      {
        path: '/supplierInformation',
        name: 'supplierInformation',
        text: '供应商信息管理',
        meta: {
          text: '供应商信息管理',
          menuPath: '/supplierInformation',
          menuBread: ['主页', '供应商信息管理']
        },
        isShow: true,
        icon: '1',
        component: () => import('./views/system/supplierInformation/index.vue')
      },
      {
        path: '*',
        redirect: '/404',
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      text: '登录',
      menuPath: '/login',
      menuBread: []
    },
    component: () => import('./views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      text: '注册',
      menuPath: '/register',
      menuBread: []
    },
    component: () => import('./views/Register.vue')
  },
  {
    path: '/404',
    name: 'noFound',
    meta: {
      text: '404',
      menuPath: '/nofound',
      menuBread: ['未找到页面']
    },
    component: () => import('./views/noFound.vue')

  }
]
export default routeList
