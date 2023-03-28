const CarEvaluation = () => {
    return (
        <div className="page-section">
          <div className="animated-section form-06 page_section_73 section section_container-width_800" id="" make-scope>
            <div className="form-06__inner section__content">
              <div className="section__header section__header_align_center wysiwyg-string">
                <div>Получите оценку стоимости автомобиля за 15 мин!</div>
              </div>

              <div className="form-06__content">
                <div ng-hide="fc[(&#39;form&#39; + 73)].success">
                  <div
                    className="form-06__form"
                    ng-init='page_form_73 = {"formAfterSendMessage":"Спасибо! Ваше сообщение получено","formContent":null,"formErrorMessage":"Пожалуйста, заполните эти поля","formHeader":null,"formInputs":[{"type":"phone","label":"Ваш телефон","required":true},{"type":"text","label":"Марка и модель авто"},{"type":"text","label":"Год выпуска"},{"type":"text","label":"Город доставки"}],"formSubmitButtonText":"Отправить","formCaptcha":false}'
                  >
                    <form className="form" name="{{fc.getFormName(73)}}" ng-cloak ng-init="fc.initFormData(73, page_form_73.formInputs)" ng-submit="fc.submit(73)" novalidate>
                      <div
                        className="form__item"
                        ng-className="{&#39;form__fieldset&#39; : [&#39;radio&#39;, &#39;checkbox&#39;, &#39;select&#39;].indexOf(input.type) &gt;= 0 || (input.type === &#39;address&#39; &amp;&amp; input.full_format), &#39;form__item_hidden&#39; : input.type === &#39;hidden&#39;}"
                        ng-repeat="(inputIndex, input) in page_form_73.formInputs"
                      >
                        <div className="form__input" ng-if="input.type === &#39;name&#39;">
                          <input
                            className="text-input"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                            type="text"
                          />
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <div className="form__input" ng-if="input.type === &#39;phone&#39;">
                          <input
                            className="text-input"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                            type="text"
                          />
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <div className="form__input" ng-if="input.type === &#39;email&#39;">
                          <input
                            className="text-input"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; (fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required || fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.email)}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                            type="email"
                          />
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; (fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required || fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.email)"
                          ></div>
                        </div>
                        <div className="form__input" ng-if="input.type === &#39;text&#39; &amp;&amp; !input.multiple_lines">
                          <input
                            className="text-input"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                            type="text"
                          />
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <div className="form__input" ng-if="input.type === &#39;address&#39; &amp;&amp; !input.full_format">
                          <input
                            className="text-input"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                            type="text"
                          />
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <fieldset className="fieldset" ng-if="input.type === &#39;address&#39; &amp;&amp; input.full_format">
                          <legend className="fieldset__legend" ng-bind="input.label" ng-if="input.label"></legend>
                          <div className="form__input">
                            <input
                              className="text-input"
                              name="input{{73}}_{{inputIndex}}_address1"
                              ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_address1&#39;].$error.required}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_address1"
                              ng-required="input.required"
                              placeholder="Адрес"
                              type="text"
                            />
                            <div
                              className="form__input-error"
                              ng-bind="page_form_73.formErrorMessage"
                              ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_address1&#39;].$error.required"
                            ></div>
                          </div>
                          <div className="form__input">
                            <input className="text-input" ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_address2" placeholder="Адрес (дополнение)" type="text" />
                          </div>
                          <div className="form__input">
                            <input
                              className="text-input"
                              name="input{{73}}_{{inputIndex}}_city"
                              ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_city&#39;].$error.required}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_city"
                              ng-required="input.required"
                              placeholder="Город"
                              type="text"
                            />
                            <div
                              className="form__input-error"
                              ng-bind="page_form_73.formErrorMessage"
                              ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_city&#39;].$error.required"
                            ></div>
                          </div>
                          <div className="form__inputs-group">
                            <div className="form__inputs-group-item">
                              <input
                                className="text-input"
                                name="input{{73}}_{{inputIndex}}_zip"
                                ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_zip&#39;].$error.required}"
                                ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_zip"
                                ng-required="input.required"
                                placeholder="Индекс"
                                type="text"
                              />
                              <div
                                className="form__input-error"
                                ng-bind="page_form_73.formErrorMessage"
                                ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_zip&#39;].$error.required"
                              ></div>
                            </div>
                            <div className="form__inputs-group-item">
                              <input
                                className="text-input"
                                name="input{{73}}_{{inputIndex}}_region"
                                ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_region"
                                placeholder="Область"
                                type="text"
                              />
                              <div
                                className="form__input-error"
                                ng-bind="page_form_73.formErrorMessage"
                                ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_region&#39;].$error.required"
                              ></div>
                            </div>
                          </div>
                          <div className="form__input">
                            <input
                              className="text-input"
                              name="input{{73}}_{{inputIndex}}_country"
                              ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_country&#39;].$error.required}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value_country"
                              ng-required="input.required"
                              placeholder="Страна"
                              type="text"
                            />
                            <div
                              className="form__input-error"
                              ng-bind="page_form_73.formErrorMessage"
                              ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex + &#39;_country&#39;].$error.required"
                            ></div>
                          </div>
                        </fieldset>
                        <div className="form__input" ng-if="input.type === &#39;text&#39; &amp;&amp; input.multiple_lines">
                          <textarea
                            className="textarea"
                            name="input{{73}}_{{inputIndex}}"
                            ng-className="{&#39;textarea_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                            ng-required="input.required"
                            placeholder="{{input.label}}"
                          ></textarea>
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <fieldset className="fieldset" ng-if="input.type === &#39;radio&#39;">
                          <legend className="fieldset__legend" ng-bind="input.label" ng-if="input.label"></legend>
                          <label className="fieldset__radio-item radio" ng-repeat="option in input.options">
                            <input
                              className="radio__input"
                              name="input{{73}}_{{inputIndex}}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                              ng-required="input.required"
                              type="radio"
                              value="{{option.name}}"
                            />
                            <span className="radio__box"></span>
                            <span className="radio__text" ng-bind="option.name"></span>
                          </label>
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </fieldset>
                        <fieldset className="fieldset" ng-if="input.type === &#39;checkbox&#39;">
                          <legend className="fieldset__legend" ng-bind="input.label" ng-if="input.label"></legend>
                          <label className="fieldset__checkbox-item checkbox" ng-repeat="option in input.options">
                            <input
                              className="checkbox__input"
                              name="input{{73}}_{{inputIndex}}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].options[$index].value"
                              ng-required="input.required &amp;&amp; !fc.isAnyChecked(fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].options)"
                              type="checkbox"
                              value="{{option.name}}"
                            />
                            <span className="checkbox__box">
                              {/* <svg>
                                <use xlink:href="/assets/sites/template1/icons.svg#icon-check"></use>
                              </svg> */}
                            </span>
                            <span className="checkbox__text" ng-bind="option.name"></span>
                          </label>
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </fieldset>
                        <fieldset className="fieldset" ng-if="input.type === &#39;select&#39;">
                          <legend className="fieldset__legend" ng-bind="input.label" ng-if="input.label"></legend>
                          <div className="form__input">
                            <div
                              className="form__select"
                              ng-className="{&#39;form__select_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                            >
                              <div
                                className="select"
                                // name="input{{73}}_{{inputIndex}}"
                                ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                                ng-required="input.required"
                                // theme="selectize"
                                ui-select=""
                              >
                                <div ng-bind="$select.selected.name" placeholder="{{input.label}}" ui-select-match=""></div>
                                {/* <div repeat="option.name as option in input.options" ui-select-choices="">
                                  <div ng-bind="option.name"></div>
                                </div> */}
                              </div>
                            </div>
                            <div
                              className="form__input-error"
                              ng-bind="page_form_73.formErrorMessage"
                              ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                            ></div>
                          </div>
                        </fieldset>
                        <div className="form__input" ng-if="input.type === &#39;date&#39; &amp;&amp; input.with_time">
                          <div className="date-input">
                            <input
                              auto-close="true"
                              className="date-input__input text-input"
                              date-time=""
                            //   format="DD.MM.YYYY HH:mm"
                              min-view="hours"
                              name="input{{73}}_{{inputIndex}}"
                              ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                              ng-required="input.required"
                              placeholder="{{input.label}}"
                              type="datetime"
                            //   view="date"
                            />
                            {/* <svg className="date-input__icon">
                              <use xlink:href="/assets/sites/template1/icons.svg#icon-calendar"></use>
                            </svg> */}
                          </div>
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <div className="form__input" ng-if="input.type === &#39;date&#39; &amp;&amp; !input.with_time">
                          <div className="date-input">
                            <input
                              auto-close="true"
                              className="date-input__input text-input"
                              date-time=""
                            //   format="DD.MM.YYYY"
                              min-view="date"
                              name="input{{73}}_{{inputIndex}}"
                              ng-className="{&#39;text-input_error&#39;: fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required}"
                              ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value"
                              ng-required="input.required"
                              placeholder="{{input.label}}"
                              type="datetime"
                            //   view="date"
                            />
                            {/* <svg className="date-input__icon">
                              <use xlink:href="/assets/sites/template1/icons.svg#icon-calendar"></use>
                            </svg> */}
                          </div>
                          <div
                            className="form__input-error"
                            ng-bind="page_form_73.formErrorMessage"
                            ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                          ></div>
                        </div>
                        <div ng-if="input.type === &#39;hidden&#39;">
                          <input ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value" type="hidden" />
                        </div>
                        <fieldset className="form__fieldset fieldset" ng-if="input.type === &#39;file&#39;">
                          <legend className="fieldset__legend" ng-bind="input.label" ng-if="input.label"></legend>
                          <div className="form__input">
                            <div className="file-input">
                              <input
                                name="input{{73}}_{{inputIndex}}"
                                ng-model="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.filename"
                                ng-required="input.required"
                                ng-show="!fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.id &amp;&amp; !fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.uploading"
                                oi-file="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].uploadOptions"
                                type="file"
                              />
                              <div
                                className="file-input__item"
                                ng-show="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.id || fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.uploading"
                              >
                                <span className="file-input__item-name" ng-bind="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.filename"></span>
                                <progress
                                  className="file-input__item-progress"
                                  max="100"
                                  ng-show="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.uploading"
                                  value="{{fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.progress}}"
                                >
                                  <div>
                                    <span style={{width: '50%'}}></span>
                                  </div>
                                </progress>
                                <span ng-show="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].value.id">OK</span>
                                <button className="file-input__item-remove" ng-click="fc[&#39;form&#39; + 73 + &#39;inputs&#39;][inputIndex].deleteFile()" type="button">
                                  {/* <svg>
                                    <use xlink:href="/assets/sites/template1/icons.svg#icon-cross"></use>
                                  </svg> */}
                                </button>
                              </div>
                            </div>
                            <div
                              className="form__input-error"
                              ng-bind="page_form_73.formErrorMessage"
                              ng-if="page_form_73.formErrorMessage &amp;&amp; fc[&#39;form&#39; + 73].$submitted &amp;&amp; fc[&#39;form&#39; + 73][&#39;input&#39; + 73 + &#39;_&#39; + inputIndex].$error.required"
                            ></div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="form__item" ng-if="page_form_73.formCaptcha">
                        <div className="form-captcha form__input">
                          <div key="&#39;&#39;" on-success="fc.recaptchaResponse(73, response)" vc-recaptcha=""></div>
                        </div>
                      </div>

                      <div className="form__submit">
                        <button className="button button_style_1 button_visual-css button_has-shadow-hover" type="submit">
                          <div className="button__inner"><span className="button__text">{{page_form_73.formSubmitButtonText}}</span></div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-06__success" ng-show="fc[(&#39;form&#39; + 73)].success">Спасибо! Ваше сообщение получено</div>
              </div>
            </div>
          </div>
        {/* </div> */}
    )
}
export { CarEvaluation}