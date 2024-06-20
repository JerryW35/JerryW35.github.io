---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

[Everything You Always Wanted to Know About Storage Compressibility of Pre-Trained ML Models but Were Afraid to Ask
](https://arxiv.org/pdf/2402.13429) (VLDB'24)

[Temporal Cue Guided Video Highlight Detection With Low-Rank Audio-Visual Fusion](https://openaccess.thecvf.com/content/ICCV2021/papers/Ye_Temporal_Cue_Guided_Video_Highlight_Detection_With_Low-Rank_Audio-Visual_Fusion_ICCV_2021_paper.pdf) (ICCV'21).