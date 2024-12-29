import Dropdown from "./dropdown-footer"

export default function FooterListMd() {
    const important_links = {name: 'روابط مهمة', links: [{label: ' منصة الخدمة الوطنية', href: '#'}, {label: 'منصة البيانات المفتوحة', href: '##'}, {label: 'منصة الاستشارات القانونية', href: '###'}, {label: 'منصة المشاركة المجتمعية', href: '####'}, {label: ' الهيئة الملكية', href: '#####'}, {label: 'دليل وفعاليات الرياض', href: '######'}, {label: 'التوظيف', href: '#######'}, {label: 'المستشار العقاري', href: '########'}]}
    const support_links = {name: 'الدعم و المساندة', links: [{label: 'تواصل معنا', href: ''}, {label: 'رفع شكوى', href: ''}, {label: 'التبليغ عن فساد', href: ''}, {label: 'الأسئلة الشائعة', href: ''}, {label: 'مركز الدعم الموحد', href: ''}, {label: 'الدعم الفني بلغة الإشارة', href: ''}, {label: 'سياسة حق الحصول على المعلومات', href: ''}]}
    const overview_links = {name: 'نظرة عامة', links: [{label: 'من نحن', href: ''}, {label: 'نبذة عن البوابة', href: ''}, {label: 'أضف فكرة', href: ''}, {label: 'الخصوصية وسرية المعلومات', href: ''}, {label: 'شروط الإستخدام', href: ''}, {label: 'الأخبار', href: ''}, {label: ' النشرة البريدية', href: ''}, {label: 'إتفاقية مستوى الخدمة', href: ''}, {label: 'إحصاءات أداء المنصة والخدمات', href: ''}, {label: 'صور وأرسل', href: ''}, {label: 'سياسة الاستخدام الآمن للتطبيقات', href: ''}]};

  return (
    <div className="w-full h-auto text-white lg:hidden flex flex-col-reverse items-end gap-2">
        <Dropdown {...important_links}/>
        <Dropdown {...support_links}/>
        <Dropdown {...overview_links}/>
    </div>
  );
}
