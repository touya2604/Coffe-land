export function handleViewDetail(
  id: string,
  setCheck: (value: boolean) => void,
  setSelectedId: (value: string) => void
) {
  //   this.check = true;
  //   this.selectedId = id;
  setCheck(true);
  setSelectedId(id);
}
