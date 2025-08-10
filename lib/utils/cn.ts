// TODO 왜 값자기 만들라는거지? 나중에 보고 삭제하던가 ?
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
