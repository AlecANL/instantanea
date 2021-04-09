function loadComponent(user, component) {
  const el = document.createElement('div');
  el.innerHTML = component(user);
  return el.firstElementChild;
}

export function render(list, component, $container) {
  list.forEach(data => {
    $container.append(loadComponent(data, component));
  });
}
