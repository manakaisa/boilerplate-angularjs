const templateHTML = `
  <m-checklist checklist="$ctrl.checklist" on-check="$ctrl.handleChecklist(key, checked)"></m-checklist>
  <m-textbox value="$ctrl.todoText" on-change="$ctrl.handleTodoText(value)"></m-textbox>
  <m-button on-click="$ctrl.push()">add</m-button>
  <m-button on-click="$ctrl.pop()">del</m-button>
`;

export default angular
  .module('components.mTodo', [])
  .component('mTodo', {
    template: templateHTML,
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      let $ctrl = this;

      let maxID = 2;
      $ctrl.checklist = [
        { key: 1, label: 'foo', checked: true },
        { key: 2, label: 'bar', checked: false }
      ];
      $ctrl.handleChecklist = (key, checked) => {
        $ctrl.checklist.find(item => item.key === key).checked = checked;
      };
      $ctrl.push = () => {
        maxID += 1;
        $ctrl.checklist = $ctrl.checklist.concat([{ key: maxID, value: false, label: $ctrl.todoText }]);
        $ctrl.todoText = '';
      };
      $ctrl.pop = () => {
        $ctrl.checklist = $ctrl.checklist.filter(item => !item.checked);
      };

      $ctrl.todoText = '';
      $ctrl.handleTodoText = (value) => {
        $ctrl.todoText = value;
      };
    }]
  })
  .name;
