import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

// Управляет доступом к юрл. Определяет надо загружать компонент(страницу)
// Если метод вернет true - загрузит, иначе - нет.
// Этот класс нужно добавить в конфигурацию марштрутов как дополнительный параметер, например:
// {path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard]} в файле user.routes.ts
// также нужно добавить его в app.module.ts в раздел providers: [], аналогичто сервисам
export class UserDetailGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return confirm("Do you wand pass to user/detail?");
  }

}
