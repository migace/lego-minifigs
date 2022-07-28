export type MinifigType = {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url?: string;
  set_num: string;
  set_url: string;
};

type ExternalIdsType = {
  [key: string]: {
    ext_ids: number[];
    ext_descrs: string[][];
  };
};

export type MinifigPartsType = {
  id: number;
  inv_part_id: number;
  part: {
    part_num: string;
    name: string;
    part_cat_id: number;
    part_url: string;
    part_img_url: string;
    external_ids: {
      BrickLink: string[];
      BrickOwl: string[];
      Brickset: string[];
      LEGO: string[];
    };
    print_of: string | null;
  };
  color: {
    id: number;
    name: string;
    rgb: string;
    is_trans: boolean;
    external_ids: ExternalIdsType;
  };
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
};
