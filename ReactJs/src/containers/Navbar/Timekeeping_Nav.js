
export default [
  {
   _tag:'CDropdown',
   inNav:true,
   _icon: 'cil-speedometer',
   _children:[
      {
        _tag:'CDropdownToggle',
        _children:['Chấm công']
      },
      {
        _tag:'CDropdownMenu',
       //placement:"bottom-end",
        _children:[
          {
            _tag:'CDropdownItem',
            to: '/base/tables',
            _children:['Tổ chức nhân sự']
          },
          {
            _tag:'CDropdownItem',
            to: '/base/tabs',
            _children:['Tiếp nhận nhân viên mới']
          },
          {
            _tag:'CDropdownItem',
            to: '/base/cards',
            _children:['Hồ sơ']
          },
          {
            _tag:'CDropdown',
            inNav:true,
            _children:[
              {
                _tag:'CDropdownToggle',
                _children:['Dữ liệu nhân viên']
              },
              {
                _tag:'CDropdownMenu',
                 placement:"right-start",
                _children:[
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navbars',
                    _children:['Nhân viên nghỉ việc']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navs',
                    _children:['Nhân viên đến tuổi nghỉ hưu']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navs',
                    _children:['Danh sách trình độ chuyên môn']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navs',
                    _children:['Người thân']
                  }
                ]
              }
            ]
          },
          {
            _tag:'CDropdown',
            inNav:true,
            _children:[
              {
                _tag:'CDropdownToggle',
                _children:['Hợp đồng']
              },
              {
                _tag:'CDropdownMenu',
                 placement:"right-start",
                _children:[
                  {
                    _tag:'CDropdownItem',
                     to: '/base/tables',
                    _children:['Danh sách hợp đồng']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navbars',
                    _children:['Danh sách nhân viên chưa có hợp đồng']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navs',
                    _children:['Danh sách hợp đồng hết hạn']
                  },
                  {
                    _tag:'CDropdownItem',
                     to: '/base/navs',
                    _children:['Phụ lục hợp đồng']
                  }
                ]
              }
            ]
          }
        ]
      }
   ]
  }
  ]
