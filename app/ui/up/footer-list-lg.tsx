import FooterUl from "./footer-ul";

export default function FooterListLg() {
    const important_links = {name: 'روابط مهمة', links: [{label: ' منصة الخدمة الوطنية', href: '#'}, {label: 'منصة البيانات المفتوحة', href: '##'}, {label: 'منصة الاستشارات القانونية', href: '###'}, {label: 'منصة المشاركة المجتمعية', href: '####'}, {label: ' الهيئة الملكية', href: '#####'}, {label: 'دليل وفعاليات الرياض', href: '######'}, {label: 'التوظيف', href: '#######'}, {label: 'المستشار العقاري', href: '########'}]}
    const support_links = {name: 'الدعم و المساندة', links: [{label: 'تواصل معنا', href: '/contactus'}, {label: 'رفع شكوى', href: '/complain'}, {label: 'التبليغ عن فساد', href: '/corruption'}, {label: 'الأسئلة الشائعة', href: '/q&a'}, {label: 'مركز الدعم الموحد', href: '/support'}, {label: 'الدعم الفني بلغة الإشارة', href: '/sign-support'}, {label: 'سياسة حق الحصول على المعلومات', href: '/info-policy'}]}
    const overview_links = {name: 'نظرة عامة', links: [{label: 'من نحن', href: '/whoweare'}, {label: 'نبذة عن البوابة', href: '/aboutamana'}, {label: 'أضف فكرة', href: '/addidea'}, {label: 'الخصوصية وسرية المعلومات', href: '/privacy'}, {label: 'شروط الإستخدام', href: '/regs'}, {label: 'الأخبار', href: '/news'}, {label: ' النشرة البريدية', href: '/postoffice'}, {label: 'إتفاقية مستوى الخدمة', href: '/service'}, {label: 'إحصائيات أداء المنصة والخدمات', href: '/statistics'}, {label: 'صور وأرسل', href: '/photosend'}, {label: 'سياسة الاستخدام الآمن للتطبيقات', href: '/apps-security'}]};

  return (
    <div className="lg:flex hidden justify-end gap-4 pb-4 px-2 w-3/4">
        <FooterUl {...important_links} />
        <FooterUl {...support_links} />
        <FooterUl {...overview_links} />
    </div>
  );
}
