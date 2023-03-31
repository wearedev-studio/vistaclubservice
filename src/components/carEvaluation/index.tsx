const CarEvaluation = () => {
  return (
    <div className="animated-section form-06 page_section_73 section section_container-width_800 ng-scope animated-section_hidden animated-section_visible" make-scope="" style={{}}>
      <div className="form-06__inner section__content">
        <div className="section__header section__header_align_center wysiwyg-string">
          <div>Получите оценку стоимости автомобиля за 15 мин!</div>
        </div>
        <div className="form-06__content">
          <div ng-hide="fc[('form' + 73)].success" className="">
            <div
              className="form-06__form"
              ng-init='page_form_73 = {"formAfterSendMessage":"Спасибо! Ваше сообщение получено","formContent":null,"formErrorMessage":"Пожалуйста, заполните эти поля","formHeader":null,"formInputs":[{"type":"phone","label":"Ваш телефон","required":true},{"type":"text","label":"Марка и модель авто"},{"type":"text","label":"Год выпуска"},{"type":"text","label":"Город доставки"}],"formSubmitButtonText":"Отправить","formCaptcha":false}'
            >
              <form className="form ng-pristine ng-invalid ng-invalid-required" name="fc.form73" ng-init="fc.initFormData(73, page_form_73.formInputs)" ng-submit="fc.submit(73)">
                <div
                  className="form__item ng-scope"
                  ng-class="{'form__fieldset' : ['radio', 'checkbox', 'select'].indexOf(input.type) >= 0 || (input.type === 'address' && input.full_format), 'form__item_hidden' : input.type === 'hidden'}"
                  ng-repeat="(inputIndex, input) in page_form_73.formInputs"
                >
                  <div className="form__input ng-scope" ng-if="input.type === 'phone'">
                    <input
                      className="text-input ng-pristine ng-untouched ng-invalid ng-invalid-required"
                      name="input73_0"
                      ng-class="{'text-input_error': fc['form' + 73].$submitted && fc['form' + 73]['input' + 73 + '_' + inputIndex].$error.required}"
                      ng-model="fc['form' + 73 + 'inputs'][inputIndex].value"
                      ng-required="input.required"
                      placeholder="Ваш телефон"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  className="form__item ng-scope"
                  ng-class="{'form__fieldset' : ['radio', 'checkbox', 'select'].indexOf(input.type) >= 0 || (input.type === 'address' && input.full_format), 'form__item_hidden' : input.type === 'hidden'}"
                  ng-repeat="(inputIndex, input) in page_form_73.formInputs"
                >
                  <div className="form__input ng-scope" ng-if="input.type === 'text' && !input.multiple_lines">
                    <input
                      className="text-input ng-pristine ng-untouched ng-valid ng-valid-required"
                      name="input73_1"
                      ng-class="{'text-input_error': fc['form' + 73].$submitted && fc['form' + 73]['input' + 73 + '_' + inputIndex].$error.required}"
                      ng-model="fc['form' + 73 + 'inputs'][inputIndex].value"
                      ng-required="input.required"
                      placeholder="Марка и модель авто"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  className="form__item ng-scope"
                  ng-class="{'form__fieldset' : ['radio', 'checkbox', 'select'].indexOf(input.type) >= 0 || (input.type === 'address' && input.full_format), 'form__item_hidden' : input.type === 'hidden'}"
                  ng-repeat="(inputIndex, input) in page_form_73.formInputs"
                >
                  <div className="form__input ng-scope" ng-if="input.type === 'text' && !input.multiple_lines">
                    <input
                      className="text-input ng-pristine ng-untouched ng-valid ng-valid-required"
                      name="input73_2"
                      ng-class="{'text-input_error': fc['form' + 73].$submitted && fc['form' + 73]['input' + 73 + '_' + inputIndex].$error.required}"
                      ng-model="fc['form' + 73 + 'inputs'][inputIndex].value"
                      ng-required="input.required"
                      placeholder="Год выпуска"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  className="form__item ng-scope"
                  ng-class="{'form__fieldset' : ['radio', 'checkbox', 'select'].indexOf(input.type) >= 0 || (input.type === 'address' && input.full_format), 'form__item_hidden' : input.type === 'hidden'}"
                  ng-repeat="(inputIndex, input) in page_form_73.formInputs"
                >
                  <div className="form__input ng-scope" ng-if="input.type === 'text' && !input.multiple_lines">
                    <input
                      className="text-input ng-pristine ng-untouched ng-valid ng-valid-required"
                      name="input73_3"
                      ng-class="{'text-input_error': fc['form' + 73].$submitted && fc['form' + 73]['input' + 73 + '_' + inputIndex].$error.required}"
                      ng-model="fc['form' + 73 + 'inputs'][inputIndex].value"
                      ng-required="input.required"
                      placeholder="Город доставки"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form__submit">
                  <button className=" button button_style_1 button_visual-css button_has-shadow-hover" type="submit">
                    <div className="button__inner">
                      <span className="button__text ng-binding">Отправить</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* TOOD: Show if confirm */}
          {/* <div className="form-06__success ng-hide" ng-show="fc[('form' + 73)].success">
            Спасибо! Ваше сообщение получено
          </div> */}
        </div>
      </div>
    </div>
  );
};
export { CarEvaluation };
