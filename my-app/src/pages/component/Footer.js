import style from '@/styles/footer.module.css'
import { useQuery } from '@tanstack/react-query'
import { constant } from '@/constant/index';

export default function Footer() {
 
    const fetchCate=async ()=>{
       let response=await fetch(`${constant.api_url}/api/Flowercategory/allIndex`, {
            mode: 'cors',
            headers: {
                // "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
       })
       return await response.json()
    }
    const cateList = useQuery({
        queryFn: fetchCate,
        queryKey:['footerCate'],
        onSuccess:(res)=>{
            //console.log(res);
        }
    })
    if(cateList.isSuccess){
        //console.log(cateList.data);
    }
    return (<div className={style.footer} style={{ width: '100%' }}>
        <div className={style.footer_three_column} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p >產品</p>
                {/* <a href={`/category/9`}>玫瑰熊</a>
                <a href={`/category/`}>節日花束</a>
                <div>
                    <a>永生花</a>/<a>鮮花</a>
                </div>
                <div>
                    <a>花籃</a>/<a>花盒</a>
                </div>
                <a>情人節花束</a>
                <a>情人節禮物</a>
                <a>更多品類</a> */}
                {
                    cateList.isSuccess&&cateList.data.data.map((item,index)=>{
                        // //console.log(item);
                        return (<a key={index} href={`/category/${item.id}`}>{item.categoryname}</a>)
                    })
                }
            </div>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>幫助</p>
                <a>購物指南</a>
                <a>訂製服務</a>
                <a>送貨服務</a>
                <a href='/Contactus'>關於我們</a>
            </div>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>聯絡我們</p>
                <div>香港新界葵涌國瑞路116-122號</div>
                <div>城市工業中心1樓H&J室</div>
                <div>T +852 65818053</div>
                <div>F +852 65818053</div>
                <div>E info@floralismhk.com</div>
                <div>對我們的產品及服務有興趣？</div>
                <div>請聯係我們</div>
            </div>
            <div className={`${style.special_column}`} style={{ display: 'flex', flexDirection: 'column', minWidth: 163 }}>
                <div className={style.footer_contactList} style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'column', padding: 14 }}>
                    <div style={{ flex: 1, fontSize: 20 }}>FOLLOW US</div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginTop: 16, justifyContent: 'space-between' }}>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象-3.png' className={style.footer_Image} />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象-2.png' className={style.footer_Image} />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象-1.png' className={style.footer_Image} />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象.png' className={{ ...style.footer_Image, marginRight: 0 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className={style.footer_icon_group} style={{  display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', flexDirection: 'column', padding: '10%' }}>
                <div style={{ flex: 1, fontSize: 20 }}>FOLLOW US</div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginTop: 16 }}>
                    <a>
                        <img src='/矢量智能对象-3.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象-2.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象-1.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象.png' className={{ ...style.footer_Image, marginRight: 0 }} />
                    </a>
                </div>
            </div>
        </div> */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: 16, marginBottom: 16, fontSize: 12 }}>
            ©2023 floralismhk Ins All rights reserved
        </div>
    </div>)
}