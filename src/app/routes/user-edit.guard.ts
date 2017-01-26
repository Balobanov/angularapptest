import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

/*
  Определяет контракт которым должен обладать компонент. Для доступа к его состоянию.
  Чтобы определить может пользователь покинуть страницу или нет.
 */
export interface ComponentCanBeDeactivated{
  canDeactivate: () => boolean | Observable<boolean>;
}

/*
  Класс коротый проверяет можно покинуть страницу или нет.
  Этот "страж" получает доступ к компоненту на котором находится пользователь, для проверки "выполнена работа или нет"
  Так как такой класс может быть применен к любому классу компонента, этот "страж" должен точно знать какие методы у
  компонента присутствуют. Поэтому нужно определить интерфейс и реализовать его компонентом который нужно защитить.
  Через этот метод можно получать данные которые определяют может ли пользователь покинуть страницу или предупредить пользователя,
  например, что данные из формы будут потеряны если он выйдет, вызвать окно подтверждения.
  Если пользователь нажал "ок" метод возвращает true и покидает страницу.
 */
export class UserEditGuard implements CanDeactivate<ComponentCanBeDeactivated>{
  canDeactivate(component: ComponentCanBeDeactivated, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
