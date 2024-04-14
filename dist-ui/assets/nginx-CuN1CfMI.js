import{g as v,r as k}from"./index-f7F5Jf2R.js";function z(l,u){for(var a=0;a<u.length;a++){const n=u[a];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in l)){const c=Object.getOwnPropertyDescriptor(n,s);c&&Object.defineProperty(l,s,c.get?c:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}};(function(l,u){(function(a){a(k())})(function(a){a.defineMode("nginx",function(n){function s(_){for(var t={},r=_.split(" "),e=0;e<r.length;++e)t[r[e]]=!0;return t}var c=s("break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23"),g=s("http mail events server types location upstream charset_map limit_except if geo map"),y=s("include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files"),x=n.indentUnit,o;function i(_,t){return o=t,_}function p(_,t){_.eatWhile(/[\w\$_]/);var r=_.current();if(c.propertyIsEnumerable(r))return"keyword";if(g.propertyIsEnumerable(r))return"variable-2";if(y.propertyIsEnumerable(r))return"string-2";var e=_.next();if(e=="@")return _.eatWhile(/[\w\\\-]/),i("meta",_.current());if(e=="/"&&_.eat("*"))return t.tokenize=d,d(_,t);if(e=="<"&&_.eat("!"))return t.tokenize=m,m(_,t);if(e=="=")i(null,"compare");else return(e=="~"||e=="|")&&_.eat("=")?i(null,"compare"):e=='"'||e=="'"?(t.tokenize=b(e),t.tokenize(_,t)):e=="#"?(_.skipToEnd(),i("comment","comment")):e=="!"?(_.match(/^\s*\w*/),i("keyword","important")):/\d/.test(e)?(_.eatWhile(/[\w.%]/),i("number","unit")):/[,.+>*\/]/.test(e)?i(null,"select-op"):/[;{}:\[\]]/.test(e)?i(null,e):(_.eatWhile(/[\w\\\-]/),i("variable","variable"))}function d(_,t){for(var r=!1,e;(e=_.next())!=null;){if(r&&e=="/"){t.tokenize=p;break}r=e=="*"}return i("comment","comment")}function m(_,t){for(var r=0,e;(e=_.next())!=null;){if(r>=2&&e==">"){t.tokenize=p;break}r=e=="-"?r+1:0}return i("comment","comment")}function b(_){return function(t,r){for(var e=!1,f;(f=t.next())!=null&&!(f==_&&!e);)e=!e&&f=="\\";return e||(r.tokenize=p),i("string","string")}}return{startState:function(_){return{tokenize:p,baseIndent:_||0,stack:[]}},token:function(_,t){if(_.eatSpace())return null;o=null;var r=t.tokenize(_,t),e=t.stack[t.stack.length-1];return o=="hash"&&e=="rule"?r="atom":r=="variable"&&(e=="rule"?r="number":(!e||e=="@media{")&&(r="tag")),e=="rule"&&/^[\{\};]$/.test(o)&&t.stack.pop(),o=="{"?e=="@media"?t.stack[t.stack.length-1]="@media{":t.stack.push("{"):o=="}"?t.stack.pop():o=="@media"?t.stack.push("@media"):e=="{"&&o!="comment"&&t.stack.push("rule"),r},indent:function(_,t){var r=_.stack.length;return/^\}/.test(t)&&(r-=_.stack[_.stack.length-1]=="rule"?2:1),_.baseIndent+r*x},electricChars:"}"}}),a.defineMIME("text/x-nginx-conf","nginx")})})();var h=w.exports;const q=v(h),j=z({__proto__:null,default:q},[h]);export{j as n};
