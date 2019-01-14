import { createGlobalStyle } from 'styled-components';

export const IconFontStyle = createGlobalStyle` 
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1547430650495'); /* IE9 */
    src: url('./iconfont.eot?t=1547430650495#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPAAAsAAAAAB9gAAANzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ4ATYCJAMQCwoABCAFhG0HSBvqBhEVnHfIfhzYzVYDeKoDCYdwKTSVYmyw78EDn1e+j9mmyUou7ROh2Qo+ydMAAUNmt6ZjuD+MiDCdkiVbz/I/8t8x07DcdhqlEBIh+eNwr03LApkPKKe1N3dRF2C8NaCxF0jABfIF/auE16XzcwI2QwAmoZKJipVrNsRAo/YSgOjZrUs7jIgCXZAuMBA4ZUzUiBnYMOREeQmY7vxefCQzAyQ2hTqwbudKHSn7xufNKzXWcaOlhYDZnQ4Qp4ECkoEG0TXT0B7lBZIpzE9zTS4wMJDQVU3um1cOB7GWIjC0f3mgkAgQTqipzgBkU1DBGx+DEQhzIUNC+AqsA0jVABhIGgZsR8UFe5ZEI32dDcPHcvMf0dh+V9y50/jWrYa3bzeafLdMo7mTNy/uf/dukzAt5SF37riZjZ0bmj2sZs3nhZpL/Ju2O2xNBlOYReakK2JckybjnAVKNtqzgbEbrcknhWjSpEtak3Fo0HjeHBp6d2y0INo6fM2FQN8Wi4K6+DVZvHn/3phGB28n560otNtt0Z0K5cRduyaaXAmlnBgMLuwUXdduXxCQFXJshuwxY0YPkskZXgZ9FkWdq1yPr3i9k6tD7U730nUayfLtu5W+q/+sBww8nZ8mbOVS+yQ07ubSyqpRtvBV6yYDLwb4/AmM+RQTyj/nZX2lfXJ2cyHFhNq4hxd7Bbx9OnF3tYeL++0LHuHnb/nuDnxXLav5yh/FMWB8rco+tSvRFwDHXzVGOXiHKgqNU83UqOf3NzxXUYfauJX8ZlgagHvtrd+wOcZpqgl5CMzKzKfFrJijv2xVqfWbYzB+Rk16qBcSMDGBZxQBT0+6MPkg0AkMiQmQFCMEFAbRSI1NBhsW2eCEQRkwSVJluoWX/iiELg4FEr0ZCO4+ILmyg+Lui9TYH9j4+oMT96ZgapzXgpbYclGBUDIaUFfIddtYXc3CTd+gO1aSwmyHcEAacjdEfhgPp9ggdTFkOLmY2YKltoaEbYdV1UJHbYGa/Yy5mweBzXqTr9t6JFRAkMSQAZQrkNNaDWsVZiLx/Q3kHFUkKsj6oT5AZJDXDyK+sAIyFTSVsk7lmsGJE2PMAhZp1UDCdKjSAi3QZbcrII35sga+zlxA+WxVgT+8qD7DRYBJXUQnhRJa2DAvG2dkkVv2STk5O4QWns5Ql3kzGgEA') format('woff2'),
    url('./iconfont.woff?t=1547430650495') format('woff'),
    url('./iconfont.ttf?t=1547430650495') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1547430650495#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`