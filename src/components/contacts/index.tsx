import { Contact } from "@/types/contacts";
import React from "react";

const currentYear = new Date().getFullYear();

interface ComponentProps {
  contacts: Contact;
}

const Contacts: React.FC<ComponentProps> = ({ contacts }) => {
  return (
    <div id="contacts" className="page-section">
      <div className="page_section_66 section section_container-width_1200 text-50">
        <div className="text-50__inner section__content">
          <div className="section__header section__header_align_center wysiwyg-string">
            <div>Контакты</div>
          </div>

          <div className="text-50__content text-50__content_layout_1">
            <div className="text-50__column text-50__column1 text-50__column_desktop_align_left text-50__column_mobile_align_left">
              <div dangerouslySetInnerHTML={{ __html: `${contacts.address.html}` }} className="text-50__text1 wysiwyg-string"></div>
            </div>
            <div className="text-50__divider"></div>
            <div className="text-50__column text-50__column2 text-50__column_desktop_align_left text-50__column_mobile_align_left">
              <div dangerouslySetInnerHTML={{ __html: `${contacts.contacts.html}` }} className="text-50__text2 wysiwyg-string"></div>
              <div className="text-50__divider"></div>
            </div>
            <div className="text-50__column text-50__column3 text-50__column_desktop_align_left text-50__column_mobile_align_left">
              <div dangerouslySetInnerHTML={{ __html: `${contacts.workTime.html}` }} className="text-50__text3 wysiwyg-string"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Contacts };
