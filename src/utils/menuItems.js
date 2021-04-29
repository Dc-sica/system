const menuItems = [
  {
    'id': 1,
    'parentId': 0,
    'childNodes': [

    ],
    'name': '首页',
    'icon': '&#xe61f;',
    'sort': 0,
    'hidden': 0,
    'path': '/home'
  },

  {
    'id': 50,
    'name': '库存管理',
    'code': 'inventoryManagement',
    'path': '/inventoryManagement',
    'parentId': 0,
    'sort': 0,
    'hidden': 0,
    'icon': '&#xe7d3;',
    'childNodes': [
      {
        'id': 51,
        'parentId': 2,
        'childNodes': [],
        'name': '仓库管理',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/warehouseManagement'
      },
      {
        'id': 52,
        'parentId': 2,
        'childNodes': [],
        'name': '物资入库',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/materialStorage'
      },
      {
        'id': 53,
        'parentId': 2,
        'childNodes': [],
        'name': '物资出库',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/materialDelivery'
      },
      {
        'id': 54,
        'parentId': 2,
        'childNodes': [],
        'name': '物资领用',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/materialRequisition'
      },
      {
        'id': 55,
        'parentId': 2,
        'childNodes': [],
        'name': '物资退库',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/materialWithdrawal'
      },
      {
        'id': 51,
        'parentId': 2,
        'childNodes': [],
        'name': '库存明细帐查询',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/inventoryQuery'
      },
    ]
  },

  {
    'id': 2,
    'parentId': 0,
    'name': '采购业务',
    'icon': '',
    'sort': 0,
    'hidden': 0,
    'path': '/procurementBusiness',
    'childNodes': [
      {
        'id': 3,
        'parentId': 2,
        'name': '采购申请',
        'icon': '&#xe625;',
        'sort': 0,
        'hidden': 0,
        'path': '/purchaseRequisition',
        'childNodes': [],
      },
      {
        'id': 4,
        'parentId': 2,
        'childNodes': [],
        'name': '采购审批',
        'icon': '&#xe632;',
        'sort': 0,
        'hidden': 0,
        'path': '/purchaseApproval'
      },
      {
        'id': 5,
        'parentId': 2,
        'childNodes': [],
        'name': '采购收货',
        'icon': '&#xe623;',
        'sort': 0,
        'hidden': 0,
        'path': '/purchaseReceipt'
      },
      {
        'id': 8,
        'parentId': 2,
        'childNodes': [],
        'name': '采购退货',
        'icon': '',
        'sort': 0,
        'hidden': 0,
        'path': '/purchaseReturns'
      },
      {
        'id': 11,
        'parentId': 2,
        'childNodes': [],
        'name': '退货审批',
        'icon': '',
        'sort': 0,
        'hidden': 0,
        'path': '/returnApproval'
      },
      {
        'id': 33,
        'parentId': 2,
        'childNodes': [],
        'name': '采购发票维护',
        'icon': '',
        'sort': 0,
        'hidden': 1,
        'path': '/purchaseInvoice'
      },
    ]
  },

  {
    'id': 12,
    'parentId': 0,
    'name': '建议反馈',
    'icon': '',
    'sort': 0,
    'hidden': 0,
    'path': '/feedback',
    'childNodes': [
      {
        'id': 13,
        'parentId': 12,
        'childNodes': [],
        'name': '用户反馈',
        'icon': '',
        'sort': 0,
        'hidden': 0,
        'path': '/customerFeedback'
      },
      {
        'id': 14,
        'parentId': 12,
        'childNodes': [],
        'name': '消息回复',
        'icon': '',
        'sort': 0,
        'hidden': 0,
        'path': '/messageReply'
      },
    ]
  },

  {
    'id': 26,
    'name': '系统设置',
    'code': 'system',
    'path': '/system',
    'parentId': 0,
    'sort': 0,
    'hidden': 0,
    'icon': '&#xe7d3;',
    'childNodes': [
      {
        'id': 47,
        'name': '部门设置',
        'path': '/departmentSetting',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '用户管理',
        'path': '/userManagement',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '角色管理',
        'path': '/roleManagement',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '字典管理',
        'path': '/dictManagement',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '审批流程设置',
        'path': '/approvalProcessSettings',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '物料分类',
        'path': '/materialClassification',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '物料信息',
        'path': '/materialInformation',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
      {
        'id': 48,
        'name': '供应商信息管理',
        'path': '/supplierInformation',
        'parentId': 26,
        'sort': 0,
        'hidden': 0,
        'icon': '&#xe7d3;',
        'childNodes': []
      },
    ]
  },


]

export default menuItems
