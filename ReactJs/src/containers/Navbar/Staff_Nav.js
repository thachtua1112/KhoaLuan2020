
export default [
{
 _tag:'CDropdown',
 inNav:true,
 _icon: 'cil-speedometer',
 _children:[
    {
      _tag:'CDropdownToggle',
      _children:['Nhân sự']
    },
    {
      _tag:'CDropdownMenu',
     //placement:"bottom-end",
      _children:[
        {
          _tag:'CDropdownItem',
          to: '/nhan-su/to-chuc-nhan-su',
          _children:['Tổ chức nhân sự']
        },
        {
          _tag:'CDropdownItem',
          to: '/nhan-su/chi-tiet-nhan-vien',
          _children:['Chi tiết nhân viên']
        },
        {
          _tag:'CDropdownItem',
          to: '/nhan-su/nhan-vien-moi',
          _children:['Tiếp nhận nhân viên mới']
        },
        {
          _tag:'CDropdownItem',
          to: '/nhan-su/nhan-vien-dang-lam-viec',
          _children:['Nhân viên đang làm việc']
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
                  _tag:'CDropdown',
                  inNav:true,
                  _children:[
                    {
                    _tag:'CDropdownToggle',
                    _children:['Nhân viên nghỉ việc']
                  },
                  {
                    _tag:'CDropdownMenu',
                    placement:"right-start",
                    _children:[
                      {
                        _tag:'CDropdownItem',
                        to: '/nhan-su/du-lieu-nhan-vien/nhan-vien-dang-ki-nghi-viec',
                        _children:['Danh sách nhân viên đăng kí nghỉ việc']
                      },
                      {
                        _tag:'CDropdownItem',
                        to: '/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec',
                        _children:['Danh sách nhân viên nghỉ việc']
                      }
                    ]
                  }
                ]
                },
                {
                  _tag:'CDropdownItem',
                   to: '/nhan-su/du-lieu-nhan-vien/nhan-vien-huu',
                  _children:['Nhân viên đến tuổi nghỉ hưu']
                },
                {
                  _tag:'CDropdownItem',
                   to: '/nhan-su/du-lieu-nhan-vien/trinh-do-chuyen-mon',
                  _children:['Danh sách trình độ chuyên môn']
                },
                {
                  _tag:'CDropdownItem',
                   to: '/nhan-su/du-lieu-nhan-vien/nguoi-than',
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
                   to: '/nhan-su/hop-dong/danh-sach-hop-dong',
                  _children:['Danh sách hợp đồng']
                },
                {
                  _tag:'CDropdownItem',
                   to: '/nhan-su/hop-dong/nhan-vien-chua-co-hop-dong',
                  _children:['Danh sách nhân viên chưa có hợp đồng']
                },
                {
                  _tag:'CDropdownItem',
                   to: '/nhan-vien/hop-dong/hop-dong-het-han',
                  _children:['Danh sách hợp đồng hết hạn']
                },
                {
                  _tag:'CDropdown',
                  inNav:true,
                  _children:[
                    {
                      _tag:'CDropdownToggle',
                      _children:['Phụ lục hợp đồng']
                    },
                    {
                      _tag:'CDropdownMenu',
                       placement:"right-start",
                      _children:[
                        {
                          _tag:'CDropdownItem',
                           to: '/nhan-su/hop-dong/phu-luc-hop-dong',
                          _children:['Danh sách phụ lục hợp đồng']
                        },
                        {
                          _tag:'CDropdownItem',
                           to: '/nhan-su/hop-dong/phu-luc-hop-dong-het-han',
                          _children:['Danh sách phụ lục hợp đồng hết hạn']
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
    }
  ]
  }
]
